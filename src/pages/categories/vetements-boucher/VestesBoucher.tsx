
import React from 'react';
import CategoryTemplate from '@/components/categories/CategoryTemplate';
import { categoriesContent } from '@/config/categoriesContent';

const VestesBoucher = () => {
  return (
    <CategoryTemplate
      data={categoriesContent['vetements-boucher']['vestes']}
      parentPath="/vetements-boucher"
      parentName="vêtements boucher"
    />
  );
};

export default VestesBoucher;
