const imageCache = new Map<string, HTMLImageElement>();
const videoCache = new Map<string, HTMLVideoElement>();

// Enhanced preloading with priority
export const preloadImage = (src: string, priority: boolean = false): Promise<void> => {
  if (imageCache.has(src)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    
    // Set image loading attributes based on priority
    img.loading = priority ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.fetchPriority = priority ? 'high' : 'auto';
    
    img.onload = () => {
      imageCache.set(src, img);
      resolve();
    };
    img.onerror = reject;
    
    img.src = src;
  });
};

// Batch preload images with connection awareness
export const preloadImages = async (srcs: string[], priority: boolean = false): Promise<void> => {
  // Check if we're on a fast connection
  const connection = (navigator as any).connection;
  const isFastConnection = !connection || 
    (connection.effectiveType === '4g' && !connection.saveData);

  const batchSize = isFastConnection ? 10 : 5;
  const batches = [];
  
  for (let i = 0; i < srcs.length; i += batchSize) {
    const batch = srcs.slice(i, i + batchSize).map(src => {
      const img = new Image();
      img.fetchPriority = i === 0 && priority ? 'high' : 'auto';
      img.loading = i === 0 && priority ? 'eager' : 'lazy';
      img.decoding = 'async';
      img.src = src;
      return new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Don't fail the batch on single image error
      });
    });
    batches.push(Promise.all(batch));
  }

  try {
    await Promise.all(batches);
  } catch (error) {
    console.error('Error during image preloading:', error);
  }
};

// Generate optimized srcSet
export const generateSrcSet = (src: string): string => {
  const sizes = [320, 640, 768, 1024, 1280];
  return sizes
    .map(size => `${src} ${size}w`)
    .join(', ');
};

// Clear cache when it gets too large
export const clearImageCache = () => {
  if (imageCache.size > 100) {
    imageCache.clear();
  }
};

// Preload critical images immediately
export const preloadCriticalImages = async (products: any[]): Promise<void> => {
  if (!products?.length) return;

  // Get first visible products
  const criticalImages = products
    .slice(0, 4)
    .map(product => product.image)
    .filter(Boolean);

  // Preload critical images with high priority
  await preloadImages(criticalImages, true);

  // Preload remaining images with lower priority
  const remainingImages = products
    .slice(4)
    .map(product => product.image)
    .filter(Boolean);

  // Use requestIdleCallback if available, otherwise setTimeout
  const schedulePreload = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  
  schedulePreload(() => {
    preloadImages(remainingImages, false);
  });
};

// Video preloading (keeping existing functionality)
export const preloadVideo = (src: string): Promise<void> => {
  if (videoCache.has(src)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    
    video.onloadeddata = () => {
      videoCache.set(src, video);
      resolve();
    };
    video.onerror = reject;
    
    video.src = src;
  });
};

export const getCachedImage = (src: string): HTMLImageElement | undefined => {
  return imageCache.get(src);
};
