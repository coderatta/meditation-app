export interface affirmationCategory {
    title: string;
    data: affirmationGalleryData[];
}

export interface affirmationGalleryData {
    id: number;
    text: string;
    image: any;
}
