import React from "react";
import Image from "../components/Image/Image";
import WriterInfo from "../components/WriterInfo/WriterInfo";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";
import ShareArticle from "../components/ShareArticle/ShareArticle";
import ArticleInfoBar from "../components/ArticleInfoBar/ArticleInforBar";
import ArticleList from "../components/ArticleList/ArticleList";

interface IArticlePostProps {
  className?: string;
  img?: string;
  text?: string;
}

const ArticlePost: React.FC<IArticlePostProps> = ({ className }) => {
  return (
    <div className="flex flex-col justify-center items-center md:flex md:flex-col md:justify-center md:items-center bg-white mt-20 ">
      <div className="w-11/12 md:text-center">
        <h1 className="font-bold text-4xl md:text-6xl md:font-bold my-10">
          A few words about this blog platform, Ghost and how this site was made
        </h1>

        <p className="mb-10">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
      </div>

      <Image className="w-full mb-5" />

      <ArticleInfoBar className="flex flex-col justify-between items-center w-11/12 md:flex md:flex-row md:justify-between md:items-center border-t border-black md:w-1/2" />

      <div className="w-11/12 md:w-1/2 mt-10">
        <p className="inline-block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          itaque inventore quas nam eos delectus quasi voluptate esse, commodi
          earum illo assumenda libero sed possimus! Iste neque nisi doloribus
          sequi ducimus rerum necessitatibus error, voluptate, eius eos sed ut
          beatae autem libero mollitia quae voluptas quam ex incidunt
          voluptatibus hic laudantium magnam! Ullam, nihil nemo. Nemo magnam,
          suscipit culpa eveniet, necessitatibus doloremque iusto assumenda et,
          veritatis accusantium praesentium exercitationem deserunt maiores!
          Dignissimos, tempora ducimus! Ex quaerat iste dolorem nesciunt
          delectus inventore nulla aspernatur necessitatibus beatae, non atque
          ipsa reiciendis corporis consectetur suscipit velit recusandae rerum
          doloremque consequuntur tempora fugiat. Aspernatur?
        </p>
      </div>

      <div className="w-11/12 md:w-1/2 mt-10">
        <h4 className="font-bold text-xl">Next on the pipeline</h4>
        <p className="inline-block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          blanditiis exercitationem pariatur quos animi in aut dolorum vitae
          debitis, excepturi voluptatum sit neque assumenda esse. Sed sapiente
          optio beatae fugit doloribus. Voluptatibus dignissimos ea nam?
          Explicabo, quisquam laborum nostrum sapiente atque consequatur
          blanditiis molestias hic quo nemo deleniti similique alias corporis
          quasi eaque facere dignissimos officia optio voluptates excepturi
          magni incidunt animi in. Quos ex alias eligendi eaque reiciendis
          assumenda ducimus! Reiciendis fugiat amet, beatae sequi impedit quidem
          inventore quis sed? Quisquam iure ratione sed sequi quasi neque.
          Blanditiis reiciendis maxime, earum perspiciatis sequi quibusdam?
          Fugit quis laudantium voluptatem voluptas!
        </p>
      </div>

      <figure className="mt-10">
        <img src="//picsum.photos/854/570" alt="article" />
        <figcaption className="text-center md:text-center w-11/12">
          Image caption cenered this way and I`ll make this a bit longer to
          indicate the amount of line height
        </figcaption>
      </figure>

      <div className="w-11/12 md:w-1/2 mt-10">
        <p className="inline-block">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi numquam
          distinctio at non? Provident, ab quibusdam! Ratione laborum minus
          deleniti voluptatem architecto accusantium doloremque eveniet
          repudiandae maxime, ad dolores porro nostrum repellendus tenetur nam
          neque eaque tempore obcaecati sed fugiat alias placeat ipsum. Ipsa
          quibusdam architecto nobis et a vel.
        </p>
      </div>

      <div className="w-11/12 md:flex md:flex-col md:text-left md:w-1/2 mt-10">
        <p className="inline-block">A list looks like this</p>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>

      <div className="w-11/12 md:w-1/2 mt-10">
        <p className="inline-block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eos
          veritatis vel dolor culpa quidem voluptas sunt recusandae id quis?
        </p>
      </div>

      <div className="w-11/12 md:w-1/2 mt-10">
        <p className="inline-block">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rerum
          sunt quae quis voluptas repellendus at, vero dignissimos quidem porro
          eos odit itaque illum. Voluptatum vitae aspernatur ad, tempore cumque
          id. Modi ab id repellendus vel totam eos, voluptate dolores vitae,
          reprehenderit molestias facere minima sit fuga voluptas voluptatem
          impedit eius. Necessitatibus sequi libero rem harum quibusdam
          molestiae est fugiat facilis odit dicta illum nemo dolorem iure
          aliquid, perferendis deleniti deserunt repellat placeat veritatis
          suscipit. Tenetur officiis quasi soluta ipsa expedita sunt odio eius
          ipsum veniam culpa dolor fuga sit illo laboriosam consectetur, quidem
          consequuntur magni facilis voluptates natus autem deleniti! Architecto
          fugiat corrupti aliquid debitis? Earum in nulla iste numquam debitis
          minus inventore excepturi voluptatum, et suscipit dignissimos est.
          Earum accusamus, adipisci quam maiores illum molestiae ex quo dolores
          reiciendis harum officia labore necessitatibus magnam sequi quasi
          similique. Quaerat harum, reprehenderit exercitationem aspernatur
          placeat esse voluptas repellat assumenda enim nisi, corrupti eos
          voluptatibus quasi veniam magni. Unde nostrum, impedit autem dolores
          quia sapiente nam molestiae porro, tempora harum quis, incidunt ullam.
          Aliquam quas expedita fugiat, hic numquam non quae officiis blanditiis
          ab quibusdam delectus perspiciatis similique, esse tempore nihil odit
          neque beatae quia, quaerat voluptatibus! Fugiat molestias numquam
          aliquid?
        </p>
      </div>

      <div className="w-11/12 md:w-1/2 mt-10">
        <p className="inline-block">
          Thanks for reading <br />
          Milka
        </p>
      </div>

      <ShareArticle className="w-11/12 flex flex-row justify-center items-center md:flex md:flex-row md:justify-center md:items-center md:w-1/2 mt-10" />

      <div className="w-11/12 md:w-1/2 mt-10">
        <p className="inline-block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          quibusdam laudantium commodi voluptate nesciunt quod id quaerat nisi
          doloribus nihil, perferendis deserunt saepe eum suscipit pariatur
          repellat fugit cumque excepturi! Possimus rerum nam est magnam fugiat
          odio in adipisci cupiditate quis recusandae quam ex, necessitatibus
          ullam ipsum temporibus! Ea illo optio consectetur, aperiam molestias
          impedit numquam animi quae reprehenderit rem! Reprehenderit quam
          mollitia sequi tenetur, suscipit debitis delectus eos, harum iusto eum
          corporis, voluptate aspernatur! Soluta culpa doloremque non id quod,
          quibusdam dignissimos sint debitis sapiente veniam dolor, asperiores
          aperiam amet temporibus minima assumenda cupiditate harum nulla, fugit
          earum. Facilis.
        </p>
      </div>

      <WriterInfo className="flex flex-row justify-between w-11/12 md:flex md:flex-row md:justify-between md:w-1/2 border-t-dotted border-black mt-10" />

      <ArticleList className="flex flex-col justify-center items-center w-full border border-t-black mt-10 border-b-white" />

      <NewsletterSignup className="flex flex-col justify-center items-center text-center w-full border border-t-8 my-10 p-5 border-t-black border-b-black md:border-t-black md:w-1/2 md:flex md:flex-col md:justify-center md:items-center md:text-center " />
    </div>
  );
};

export default ArticlePost;
