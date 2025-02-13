
import React from 'react';
import CategoryTemplate from '@/components/categories/CategoryTemplate';
import { categoriesContent } from '@/config/categoriesContent';

const TableirsCuisine = () => {
  return (
    <CategoryTemplate
      data={categoriesContent['vetements-cuisine']['tabliers']}
      parentPath="/vetements-cuisine"
      parentName="vêtements cuisine"
    />
  );
};

export default TableirsCuisine;
