import { gql } from "@apollo/client";
import Head from "next/head";
import Footer from "../components/Footer";
import { client } from "../lib/apollo";

export default function SlugPage({ page }) {
  return (
    <div>
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <article dangerouslySetInnerHTML={{ __html: page.content }}></article>
      </main>

      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_PAGE = gql`
    query GetMainMenu($id: ID = "") {
      page(id: $id, idType: URI) {
        uri
        slug
        content
      }
    }
  `;

  const response = await client.query({
    query: GET_PAGE,
    variables: {
      id: params.uri,
    },
  });

  const page = response?.data?.page;
  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
