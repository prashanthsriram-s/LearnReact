import CustomProfile from "./CustomProfile"

function GalleryWrapper({children}){
    return (
      <section>
        <h1>Here's some images</h1>
        {children}
      </section>
    );
  }

export default function CustomGallery({imgs}){
    let i=0;
    const mapping = imgs.map(img => <CustomProfile key={i++} src={img.src} alt={img.alt} />);
    return (
        <GalleryWrapper>
            {mapping}
        </GalleryWrapper>
    )
    // const rows = [];
    // for(let i=0; i<arguments.length; i++)
    // {
    //     rows.push(<CustomProfile src={arguments[i]} key = {i}/>);
    // }
    // return (
    //     <section>
    //         <h1>Here's some images !</h1>
    //         {rows}
    //     </section>
    // )
}