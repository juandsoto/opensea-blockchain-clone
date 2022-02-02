export interface ICollection {
    allOwners:       AllOwner[];
    bannerImageUrl:  string;
    contractAddress: string;
    createdBy:       CreatedBy;
    creator:         string;
    description:     string;
    floorPrice:      number;
    imageUrl:        string;
    title:           string;
    volumeTraded:    number;
}

interface AllOwner {
    _createdAt:    Date;
    _id:           string;
    _rev:          string;
    _type:         string;
    _updatedAt:    Date;
    userName:      string;
    walletAddress: string;
}

interface CreatedBy {
    _ref:  string;
    _type: string;
}
