import React from 'react'
import { Route,Router,Redirect } from 'react-router-dom'

export const ProtectedRoute = ({component:Component, ...rest }) =>
{
    return (
        <div>
            <Route {...rest} render={
              
          (props)=>
          {
              const status=sessionStorage.getItem('status')
              if(status=="LogggedIn")
                        {
                                  return  <Component  {...props}/>
                        }
          else
          {
            return <Redirect to = 
            {
                {
                    pathname:"/",
                    state:{
                        from:props.location
                 } 
                }
            }
            />
          }
        }
            



             }
            
            
            />
        </div>
    )
}
