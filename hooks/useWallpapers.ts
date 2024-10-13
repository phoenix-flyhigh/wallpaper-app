export interface IWallpaper {
    id: string;
    url: string;
    name: string;
}

export interface IWallpaperStatus {
    liked: boolean;
    library: boolean;
    suggested: boolean;
}

export default function useWallpapers() {
  const wallpapers: (IWallpaperStatus & IWallpaper)[] = [
    {
      id: "1",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/CQs43vptQbillh7tUji5MQ",
      name: "header",
      liked: true,
      library: false,
      suggested: false
    },
    {
      id: "2",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ke68xN9cRoyM4Qpn_UKUng",
      name: "sky",
      liked: true,
      library: true,
      suggested: false
    },
    {
      id: "3",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/fq9ZaMGETzWkgiuWIkZj4Q",
      name: "face",
      liked: true,
      library: false,
      suggested: true
    },
    {
      id: "4",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/cEYfd6teS3Gl42-eP5FNGw",
      name: "bird",
      liked: false,
      library: false,
      suggested: true
    },
    {
      id: "5",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/Xg9ztsDoT6ekEQtKnvg16w",
      name: "cloud",
      liked: false,
      library: true,
      suggested: true
    },
    {
      id: "6",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/IlOm3CEmTRiW5sFYdCYpOA",
      name: "doll",
      liked: true,
      library: true,
      suggested: true
    },
    {
      id: "7",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/fYZnR4puTRmW2oaoYlJ9wQ",
      name: "phone",
      liked: false,
      library: false,
      suggested: true
    }
    ,
    {
      id: "8",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/FCUMKMlYQXyZJVhQ-mKY2A",
      name: "flower",
      liked: true,
      library: false,
      suggested: true
    }
    ,
    {
      id: "9",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/xPOO6Ql8TyyW2IngUwpehQ",
      name: "lady",
      liked: false,
      library: false,
      suggested: true
    }
  ];

  return wallpapers;
}

export function useLikedWallpapers(){
    const wallpapers = useWallpapers();

    return wallpapers.filter(w => w.liked)
}

export function useLibraryWallpapers(){
    const wallpapers = useWallpapers();

    return wallpapers.filter(w => w.library)
}

export function useSuggestedWallpapers(){
    const wallpapers = useWallpapers();

    return wallpapers.filter(w => w.suggested)
}
