
import React, {Fragment, Component} from 'react';
import { NextSeo } from 'next-seo';

class PageWithDynamicUrl extends Component{

    static async getInitialProps({ query }) {
        return {
            query
        }
    }

    render(){
        const  ogData  = this.props.query;
        console.log(this.props.query);
        
        return <Fragment>
            {ogData &&  <NextSeo openGraph={{
                type: 'website',    
                title: ogData.ogTitle,
                description: ogData.ogDescription,
                images: [
                {
                    url: ogData.ogImage,
                    alt: `page with dynamic url ${ogData.ogTitle}`,
                }
                ],
            }} />
            }
                        <div>page with dynamic url!</div>
        </Fragment>
      }
    }
    
  
  export default PageWithDynamicUrl