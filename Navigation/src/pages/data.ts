 interface PhoneDetails {
  Frontcamera: string;
  rearcamera: string;
  display: string;
}

export interface Phone {
  id: string;
  ratting: number;
  originPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  moblieImg: string;
  details: PhoneDetails;
}


export const phonesData:Phone[] = [
  {   
    id: "1",
    ratting: 4.7,
    originPrice: 75999,
    discountedPrice: 65999,
    discountPercentage: 17,
    moblieImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSSdS6D1ffzCEKGmCN4egGvmTRlLJoZhDBQ&s",
    details: {
      Frontcamera: "12MP Front Camera",
      rearcamera: "12MP Dual Rear Camera",
      display: "15.49cm (6.1 inch) Super Retina XDR Display"
    }
  },
  {   
    id: "2",
    ratting: 4.6,
    originPrice: 69999,
    discountedPrice: 59999,
    discountPercentage: 14,
    moblieImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO90YTnjj1_1IB_qw-0E48wkIEdQZbM5Aaw&s",
    details: {
      Frontcamera: "32MP Front Camera",
      rearcamera: "50MP Triple Rear Camera",
      display: "16.0cm (6.3 inch) AMOLED Display"
    }
  },
  {   
    id: "3",
    ratting: 4.5,
    originPrice: 52999,
    discountedPrice: 44999,
    discountPercentage: 15,
    moblieImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO90YTnjj1_1IB_qw-0E48wkIEdQZbM5Aaw&s",
    details: {
      Frontcamera: "16MP Front Camera",
      rearcamera: "64MP Quad Rear Camera",
      display: "16.9cm (6.67 inch) Fluid AMOLED Display"
    }
  },
  {   
    id: "4",
    ratting: 4.8,
    originPrice: 124999,
    discountedPrice: 109999,
    discountPercentage: 12,
    moblieImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSSdS6D1ffzCEKGmCN4egGvmTRlLJoZhDBQ&s",
    details: {
      Frontcamera: "10.8MP Front Camera",
      rearcamera: "50MP Dual Rear Camera",
      display: "17.02cm (6.7 inch) LTPO OLED Display"
    }
  },
  {   
    id: "5",
    ratting: 4.4,
    originPrice: 17999,
    discountedPrice: 14999,
    discountPercentage: 17,
    moblieImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO90YTnjj1_1IB_qw-0E48wkIEdQZbM5Aaw&s",
    details: {
      Frontcamera: "13MP Front Camera",
      rearcamera: "50MP Dual Rear Camera",
      display: "16.7cm (6.58 inch) FHD+ Display"
    }
  },
  {   
    id: "6",
    ratting: 4.2,
    originPrice: 15999,
    discountedPrice: 12999,
    discountPercentage: 19,
    moblieImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO90YTnjj1_1IB_qw-0E48wkIEdQZbM5Aaw&s",
    details: {
      Frontcamera: "8MP Front Camera",
      rearcamera: "50MP Dual Rear Camera",
      display: "16.5cm (6.5 inch) HD+ Display"
    }
  },
  {   
    id: "7",
    ratting: 4.3,
    originPrice: 34999,
    discountedPrice: 28999,
    discountPercentage: 17,
    moblieImg: "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
    details: {
      Frontcamera: "32MP Front Camera",
      rearcamera: "108MP Triple Rear Camera",
      display: "17.0cm (6.7 inch) AMOLED Display"
    }
  },
  {   
    id: "8",
    ratting: 4.1,
    originPrice: 11999,
    discountedPrice: 9999,
    discountPercentage: 16,
    moblieImg: "https://m.media-amazon.com/images/I/81HxRGK6EJL._SL1500_.jpg",
    details: {
      Frontcamera: "8MP Front Camera",
      rearcamera: "50MP Dual Rear Camera",
      display: "16.5cm (6.5 inch) HD+ Display"
    }
  },
  {   
    id: "9",
    ratting: 4.9,
    originPrice: 139999,
    discountedPrice: 124999,
    discountPercentage: 11,
    moblieImg: "https://m.media-amazon.com/images/I/71Pj8KpGk-L._SL1500_.jpg",
    details: {
      Frontcamera: "12MP Front Camera",
      rearcamera: "200MP Triple Rear Camera",
      display: "17.27cm (6.8 inch) QHD+ Dynamic AMOLED 2X Display"
    }
  },
  {   
    id: "10",
    ratting: 4.5,
    originPrice: 27999,
    discountedPrice: 23999,
    discountPercentage: 14,
    moblieImg: "https://m.media-amazon.com/images/I/71Q5NElE3kL._SL1500_.jpg",
    details: {
      Frontcamera: "16MP Front Camera",
      rearcamera: "64MP Dual Rear Camera",
      display: "16.7cm (6.6 inch) FHD+ AMOLED Display"
    }
  }
];
