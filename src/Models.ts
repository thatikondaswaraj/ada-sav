// export interface ResultListItemData {
//     // icon: React.ReactNode;
//     description: string;
//     count: number;
//     items: {};
//     //   icon: React.ReactNode;
//     //   text: string;
//     //   info: string;
//     // }[];
//   }

  export interface AccessibilityItem {
    id: string;
    description: string;
    count: number;
    xpaths?: string[];
  }
  
  export interface Category {
    description: string;
    count: number;
    items: {
      [key: string]: AccessibilityItem;
    };
  }