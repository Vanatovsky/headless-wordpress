import Head from "next/head";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../lib/test-data";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Where is my money, Beath?</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <h1 className="title">Where is my money, Beath?</h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          {posts.map((post) => {
            return <PostCard key={post.slug} post={post}></PostCard>;
          })}
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllProducts {
      products(last: 24) {
        nodes {
          id
          link
          name
          onSale
          sku
          slug
          productCurrency
          totalSales
          type
          featured
          description
          dateOnSaleTo
          dateOnSaleFrom
          date
          databaseId
          catalogVisibility
          averageRating
          menuOrder
          modified
          purchasable
          purchaseNote
          reviewCount
          reviewsAllowed
          shortDescription
          status
          image {
            sourceUrl
          }
          ... on VariableProduct {
            id
            name
            price
          }
          ... on SimpleProduct {
            id
            name
            price
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POSTS,
  });

  const posts = response?.data?.products?.nodes;
  return {
    props: {
      posts,
    },
  };
}
