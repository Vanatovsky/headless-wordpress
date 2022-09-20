import Link from "next/link";

export default function PostCard({ post }) {
  const post_link = "/product/" + post.slug;

  return (
    <div>
      <Link href={post_link}>
        <a>
          <img height="90px" alt="##" src={post.image?.sourceUrl} />
          <h3>{post.name} &rarr;</h3>
        </a>
      </Link>

      <p>{post.id}</p>
      <p>{post.link}</p>
      <p>{post.sku}</p>
      <p>{post.slug}</p>
      <p>
        {post.price} {post.productCurrency}
      </p>
    </div>
  );
}
