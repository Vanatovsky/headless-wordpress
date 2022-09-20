import Head from "next/head";
import Footer from "../../components/Footer";
import { getPostByUri } from "../../lib/test-data";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import Link from "next/link";
import MainMenu from "../../components/menus/mainmenu";

export default function SlugPage({ post }) {
  return (
    <div>
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <MainMenu />
        <div className="siteHeader">
          <h1 className="title">{post.name}</h1>
        </div>
        <Link href="/">
          <a>↚ На главную</a>
        </Link>
        <article
          dangerouslySetInnerHTML={{ __html: post.description }}
        ></article>
      </main>

      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_PRODUCT = gql`
    query GetAllProducts($id: ID!) {
      product(id: $id, idType: SLUG) {
        date
        name
        databaseId
        catalogVisibility
        averageRating
        dateOnSaleFrom
        dateOnSaleTo
        description
        featured
        id
        link
      }
    }
  `;

  const response = await client.query({
    query: GET_PRODUCT,
    variables: {
      id: params.slug,
    },
  });

  const post = response?.data?.product;
  return {
    props: {
      post,
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
