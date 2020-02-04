
import React, {Fragment} from 'react';
import { NextSeo } from 'next-seo';

function PageWithDynamicUrl() {
    return <Fragment>
        <NextSeo openGraph={{
                type: 'website',    
                title: 'page with dynamic url  title',
                description: 'page with dynamic url example',
                images: [
                {
                    url: '/images/PageWithDynamicUrl.png',
                    alt: `page with dynamic url image`,
                }
                ],
            }} />
            <div>page with dynamic url!</div>
    </Fragment>
  }
  
  export default PageWithDynamicUrl