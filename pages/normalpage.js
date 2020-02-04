
import React, {Fragment} from 'react';
import { NextSeo } from 'next-seo';

function NormalPage() {
    
    return <Fragment>
        <NextSeo openGraph={{
                type: 'website',    
                title: 'normal page title',
                description: 'normal page example',
                images: [
                {
                    url: '/images/normalpge.png',
                    alt: `normal page image`,
                }
                ],
            }} />
            <div>normal page!</div>
    </Fragment>
  }
  
  export default NormalPage