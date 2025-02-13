
import React from 'react';
import CategoryTemplate from '@/components/categories/CategoryTemplate';
import { categoriesContent } from '@/config/categoriesContent';

const BlousesMedicales = () => {
  return (
    <CategoryTemplate
      data={categoriesContent['vetements-medicaux']['blouses']}
      parentPath="/vetements-medicaux"
      parentName="vêtements médicaux"
    />
  );
};

export default BlousesMedicales;
