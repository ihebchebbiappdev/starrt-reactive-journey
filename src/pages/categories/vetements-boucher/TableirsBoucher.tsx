
import React from 'react';
import CategoryTemplate from '@/components/categories/CategoryTemplate';
import { categoriesContent } from '@/config/categoriesContent';

const TableirsBoucher = () => {
  return (
    <CategoryTemplate
      data={categoriesContent['vetements-boucher']['tabliers']}
      parentPath="/vetements-boucher"
      parentName="vêtements boucher"
    />
  );
};

export default TableirsBoucher;
