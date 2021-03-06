import FilterCategory from "../models/FilterCategory";

export const mockFilters: FilterCategory[] = [
    {
      id: 0,
      name: "Product Categories",
      options: [
          {
            id: -1,
            selected: false,
            title: "All"
          },
          {
            id: 0,
            selected: false,
            title: "Acoustical Panels"
          },
          {
            id: 1,
            selected: false,
            title: "Metal Panels"
          },
          {
            id: 2,
            selected: false,
            title: "Retail Panels"
          }
      ]
    }
]