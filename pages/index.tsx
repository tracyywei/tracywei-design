import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "I'm a passionate web developer and designer coding beautiful websites and apps." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        {/* <Posts allPosts={allPosts} /> */}
      </div>
    </Page>
  );
}
