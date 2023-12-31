export interface listItem {
  shopId: string;
  shopName: string;
  shopType: string;
  sidoName: string;
  gunguName: string;
  gunguCode: string;
  shopRoadAddr: string;
  shopRoadAddr2: string;
  shopAddr: string;
  shopAddr2: string;
  shopTel: string;
  coRegNo: string;
  coSubRegNo: string;
  coOwnNm: string;
  coJobSt: string;
  coJobStDate: string;
  coFrNm: string;
  coFrGbn: string;
  shopBsType: string;
  shopFaType: string;
  shopLat: number;
  shopLon: number;
  wdFrTime: string;
  wdToTime: string;
  stFrTime: string;
  stToTime: string;
  hoFrTime: string;
  hoToTime: string;
  deliFrTime: string;
  deliToTime: string;
  mealType: string;
  deliverYn: string;
  mngGoNm: string;
  mngGoTel: string;
  insDate: string;
}

export interface ApiDTO {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    items: {
      item: listItem[];
    };
    numOfRows: number;
    pageNo: number;
    totalCount: number;
  };
}

export interface currentItem {
  shopBsType: string;
  shopName: string;
  shopRoadAddr: string;
}
