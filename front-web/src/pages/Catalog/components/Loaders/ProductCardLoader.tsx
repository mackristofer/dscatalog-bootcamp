import React from "react"
import ContentLoader from "react-content-loader"

const ProductCardLoader = () => {

 const loaderItems = [0,1,2];
 return (
 <>
{loaderItems.map(item => (
    <ContentLoader 
    key={item}
    speed={2}
    width={250}
    height={335}
    viewBox="0 0 250 335"
    backgroundColor="#ecebeb"
    foregroundColor="#d6d2d2"
  >
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
))}
  </>
  )
}

export default ProductCardLoader

