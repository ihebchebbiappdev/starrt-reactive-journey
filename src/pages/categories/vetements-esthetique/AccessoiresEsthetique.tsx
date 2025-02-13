
import React from 'react';
import CategoryTemplate from '@/components/categories/CategoryTemplate';
import { categoriesContent } from '@/config/categoriesContent';

const AccessoiresEsthetique = () => {
  return (
    <CategoryTemplate
      data={categoriesContent['vetements-esthetique']['accessoires']}
      parentPath="/vetements-esthetique"
      parentName="vêtements esthétique"
    />
  );
};

export default AccessoiresEsthetique;
