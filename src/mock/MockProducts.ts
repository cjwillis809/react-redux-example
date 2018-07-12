import ProductCategory from "../models/ProductCategory";

export const mockCategory: ProductCategory = {
    id: 0,
    name: "Acoustical Panels",
    products: [
        {
            id: 0,
            productDescription: "Description",
            productTitle: "Aspen Basic Acoustical Ceiling Panels",
            tileThumbnail: "https://www.iconsdb.com/icons/preview/green/square-xxl.png"
        },
        {
            id: 1,
            productDescription: "Description",
            productTitle: "ASTRO ClimaPlus with FIRECODE Acoustical Panels",
            tileThumbnail: "https://www.iconsdb.com/icons/preview/green/square-xxl.png"
        },
        {
            id: 2,
            productDescription: "Description",
            productTitle: "USG Halcyon Planks & Large Size Acousitcal Panels",
            tileThumbnail: "https://www.iconsdb.com/icons/preview/green/square-xxl.png"
        }
    ]
  }

export const mockCatalog: ProductCategory[] = [
    mockCategory,
    {
      id: 1,
      name: "Metal Panels",
      products: [
        {
          id: 3,
          productDescription: "Description",
          productTitle: "USG Celebration Metal Canopies",
          tileThumbnail: "https://www.iconsdb.com/icons/preview/green/square-xxl.png"
        },
        {
          id: 4,
          productDescription: "Description",
          productTitle: "USG Celebration Torsion Spring System",
          tileThumbnail: "https://www.iconsdb.com/icons/preview/green/square-xxl.png"
        },
        {
          id: 5,
          productDescription: "Description",
          productTitle: "Libretto Gridless Metal Ceiling System",
          tileThumbnail: "https://www.iconsdb.com/icons/preview/green/square-xxl.png"
        }
      ]
    },
    {
      id: 2,
      name: "Retail Panels",
      products: [
        {
          id: 6,
          productDescription: "Description",
          productTitle: "Luna ClimaPlus",
          tileThumbnail: "https://www.iconsdb.com/icons/preview/green/square-xxl.png"
        },
        {
          id: 7,
          productDescription: "Description",
          productTitle: "Plateau Acoustical Ceiling Panels",
          tileThumbnail: "https://www.iconsdb.com/icons/preview/green/square-xxl.png"
        },
        {
          id: 8,
          productDescription: "Description",
          productTitle: "Arctic ClimaPlus Acoustical Ceiling Panels",
          tileThumbnail: "https://www.iconsdb.com/icons/preview/green/square-xxl.png"
        }
      ]
    }
  ];