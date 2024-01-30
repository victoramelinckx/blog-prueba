import {
  ArticleLoading,
  ArticleLoadingSection,
  LoadingEffect,
  SuggestionsTitle,
  LoadingCard,
  LoadingBlogSuggestions,
} from "@/app/components/blog/loadingArticle";

const PostLoading = () => {
  return (
    <>
      <ArticleLoading>
        <ArticleLoadingSection>
          <LoadingEffect />
          <LoadingBlogSuggestions loading={true}>
            <SuggestionsTitle loading={true}>Up Next</SuggestionsTitle>
            <LoadingCard index={0} />
            <LoadingCard index={1} />
            <LoadingCard index={2} />
          </LoadingBlogSuggestions>
        </ArticleLoadingSection>
      </ArticleLoading>
    </>
  );
};

export default PostLoading;
