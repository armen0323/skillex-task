import { TFilterData } from "../utils/globalTypes";

export function filterSmartphones(smartphones: any[], params: TFilterData) {
    return smartphones?.filter((smartphone) => {
        const matchesColor = params?.colors?.length ? params.colors.includes(smartphone.color) : true;
        const matchesOS = params?.os?.length ? params.os.includes(smartphone.operatingSystem) : true;
        const matchesBrand = params?.brand?.length ? params.brand.includes(smartphone.brand) : true;

        // Handle rating filtering: check if smartphone's rating is included in the selected ratings
        const matchesRating = params?.rating?.length ? params.rating.includes(smartphone.rating.toString()) : true;

        // Handle special offers: check if smartphone has the selected special offers
        const matchesSpecialOffer = params?.special_offer?.length ?
            (params.special_offer.includes('Նվեր') ? smartphone.hasGift : true) &&
            (params.special_offer.includes('Զեղչ') ? smartphone.hasDiscount : true) : true;

        // Handle price filtering: check if smartphone's price falls within the specified range
        const matchesPrice = params?.price && params?.price?.length === 2
            ? smartphone?.price >= params?.price?.[0] && smartphone?.price <= params?.price?.[1]
            : true;

        return matchesColor && matchesOS && matchesBrand && matchesRating && matchesSpecialOffer && matchesPrice;
    });
}
