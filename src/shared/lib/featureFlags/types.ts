export interface FeatureFlags {
    isArticleRatingCardEnabled?: boolean;
}

export type FeatureFlagKeys = keyof FeatureFlags;
