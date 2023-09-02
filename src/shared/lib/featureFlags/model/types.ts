export interface FeatureFlags {
    isArticleRatingCardEnabled?: boolean;
    isRedesignEnable?: boolean;
}

export type FeatureFlagKeys = keyof FeatureFlags;
