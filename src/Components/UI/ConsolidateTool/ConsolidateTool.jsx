import "./ConsolidateTool.css";

export const ConsolidateTool = () => {
  return (
    <div className="consolidate_tooling">
      <h2>
        Consolidate tools.
        <br /> Cut Costs.
      </h2>
      <div className="img_container">
        <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-strikethrough-V2.png" />
        <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-before-notion-V2.png" />
        <picture>
          <source
            srcSet="https://www.notion.so/cdn-cgi/image/format=webp,width=128/front-static/pages/home/pencil-peek-illustration-V2.png"
            media="(max-width: 750px)"
          />

          <source srcSet="https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/pages/home/giant-pencil-illustration.png" />

          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/pages/home/giant-pencil-illustration.png"
            alt="Responsive Image"
          />
        </picture>
      </div>
      <h3>
        "We got rid of nearly a dozen different tools because of
        <br /> what Notion does for us.
      </h3>
      <div className="user_review">
        <img
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=128/front-static/shared/logos/color/metalab.png"
          alt="name"
        />
        <span>
          <b>Justin Watt</b>
          <br /> Director of Ops & Marketing, MetaLab
        </span>
      </div>
    </div>
  );
};
