export interface HallOfFameModel {
    complete: Complete[];
}

export interface Complete {
    firstName:  string;
    lastName:   string;
    innovation: string;
    year:       number;
}
