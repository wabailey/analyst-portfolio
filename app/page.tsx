import Link from "next/link";
import { client } from "./lib/sanity";
import Image from "next/image";
import Me from "../public/PortfolioPortrait.png";
import { Data } from "./lib/interface";

async function getBlogposts() {
  const query = `*[_type == "post"] {
		title,
		description,
		"thumbnailUrl": thumbnail.asset->url,
		content,
		link,
		_id,
		"slug": slug.current,
		_createdAt,
	}`;

  const data = await client.fetch(query);

  return data;
};

export default async function Home() {

  const data = await getBlogposts() as Data[];

  return (
    <>
      <div className="mt-16">

        <div className="flex flex-col items-center space-y-8 xl:grid xl:items-start xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="h-full min-h-[460px] max-h-[500px] min-w-[310px] sm:min-w-[340px] max-w-[390px] flex flex-col justify-center items-center rounded-3xl bg-gradient-to-tr from-blue-700 to-blue-400 dark:from-blue-950 dark:to-blue-600">
            <Image alt="Picture of Will" src={Me} className="h-48 object-cover object-top" />
            <h3 className="pt-4 pb-1 text-2xl font-semibold tracking-tight text-gray-200">William Bailey</h3>

            <a href="mailto:williamarthurbailey@outlook.com" className="font-light text-xs text-blue-300 dark:text-blue-400 hover:text-blue-950">williamarthurbailey@outlook.com</a>

            <div className="flex space-x-5 py-6">
              <a href="https://github.com/wabailey" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-5 h-5 text-blue-100 hover:text-blue-950"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/willab/" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-5 h-5 text-blue-100 hover:text-blue-950"
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                </svg>
              </a>
              <a href="https://twitter.com/AnalystWill" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-5 -5 100 100"
                  className="w-5 h-5 text-blue-100 hover:text-blue-950 fill-blue-100 hover:fill-blue-950" >

                  <polygon points="24.89,23.01 57.79,66.99 65.24,66.99 32.34,23.01 " />
                  <path d="M 45 0 L 45 0 C 20.147 0 0 20.147 0 45 v 0 c 0 24.853 20.147 45 45 45 h 0 c 24.853 0 45 -20.147 45 -45 v 0 C 90 20.147 69.853 0 45 0 z M 56.032 70.504 L 41.054 50.477 L 22.516 70.504 h -4.765 L 38.925 47.63 L 17.884 19.496 h 16.217 L 47.895 37.94 l 17.072 -18.444 h 4.765 L 50.024 40.788 l 22.225 29.716 H 56.032 z" />
                </svg>
              </a>
            </div>

            <p className="text-sm font-light max-w-[300px] text-blue-100 text-center">
              Hi, I&apos;m Will. I can often be found combining my sporting interests with visualizations
            </p>

          </div>

          <div className="prose max-w-none pb-4 dark:prose-invert sm:text-xl xl:col-span-2 text-gray-500 dark:text-gray-400">
            <p>
              I am a self-taught Data Analyst with a Masters in Computer Science. My postgraduate studies have equipped me with some essential data science tools and concepts, including Python, machine learning, Tableau, and SQL. 
            </p>
            <p className="py-4">
              I completed my studies at the end of 2019, and while navigating the challenges of the pandemic I transitioned into self-employment as a Web Developer, utilizing my expertise in JavaScript, HTML, and CSS to build websites for local businesses and small startups.
            </p>
            <p>
              Over this period I also remained dedicated to honing my data analysis skills, as evidenced by my ongoing projects showcased on my <Link href="/work" className="text-decoration-none no-underline text-blue-600 hover:underline dark:text-blue-500">work page.</Link> I am now seeking a data analyst position where I can leverage my diverse skillset, including strong analytical aptitude, technical proficiency, and proven problem-solving skills, to contribute meaningfully and continue my professional growth.
            </p>
          </div>

        </div>
      </div>
      <div className="mt-8">
        <div className="py-8 mx-auto max-w-screen-xl lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Latest Posts</h2>
            <p className="prose dark:prose-invert text-gray-500 sm:text-xl dark:text-gray-400">See my latest projects and posts.</p>
          </div>
          <div className="grid justify-center gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
            {data.slice(0, 3).map((post) => (
              <article key={post._id} className="overflow-hidden rounded-lg max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow">

                <div className="relative h-56 w-full">
                  <Link href={`/blog/${post.slug}`} prefetch>
                    <Image fill src={post.thumbnailUrl} alt="Thumbnail image of the post" className="rounded-t-lg w-full h-full object-cover" />
                  </Link>
                </div>

                <div className="p-4">
                  <Link href={`/blog/${post.slug}`} prefetch>
                    <h3 className="line-clamp-1 text-2xl font-semibold">{post.title}</h3>
                  </Link>

                  <p className="line-clamp-2 mt-2 mb-4 text-md font-light leading-relaxed text-gray-500 dark:text-gray-400">
                    {post.description}
                  </p>

                  <Link href={`/blog/${post.slug}`} prefetch className="group inline-flex gap-1 items-center text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-2.5">
                    Read more
                    <svg className="w-3 h-3" fill="currentColor" viewBox="1 4 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  </Link>

                </div>

              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
