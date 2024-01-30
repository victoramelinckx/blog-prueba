import {
  BlogLoading,
  BlogLoadingTitle,
  BlogLoadingSubtitle,
  BlogLoadingSection,
  LoadingCard,
} from "../components/blog/loadingBlog";

const Loading = () => {
  return (
    <>
      <BlogLoading>
        <BlogLoadingTitle>Blog</BlogLoadingTitle>
        <BlogLoadingSubtitle>
          We know how important education is. Check out our most recent post!
        </BlogLoadingSubtitle>

        <BlogLoadingSection>
          <LoadingCard index={0} />
          <LoadingCard index={1} />
          <LoadingCard index={2} />
          <LoadingCard index={3} />
          <LoadingCard index={4} />
          <LoadingCard index={5} />
        </BlogLoadingSection>
      </BlogLoading>
    </>
  );
};

export default Loading;
