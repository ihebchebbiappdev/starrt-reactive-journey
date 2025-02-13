
import React from 'react';
import CategoryTemplate from '@/components/categories/CategoryTemplate';
import { categoriesContent } from '@/config/categoriesContent';

const AccessoiresBoucher = () => {
  return (
    <CategoryTemplate
      data={categoriesContent['vetements-boucher']['accessoires']}
      parentPath="/vetements-boucher"
      parentName="vêtements boucher"
    />
  );
};

export default AccessoiresBoucher;
