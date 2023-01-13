import * as React from 'react'

import * as types from 'notion-types'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import cs from 'classnames'
import { Breadcrumbs, Header, Search, useNotionContext } from 'react-notion-x'

import { isSearchEnabled, navigationLinks, navigationStyle ,navigationLinksBlock} from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'


import styles from './styles.module.css'



const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
    </div>
  )
}

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  const { components, mapPageUrl } = useNotionContext()
  const [open,setOpen]=React.useState(false);
  if (navigationStyle === 'default') {
    return <Header block={block} />
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleChange = React.useCallback(() => {
    setOpen(!open)
  }, [open])


 
  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        <Breadcrumbs block={block} rootOnly={true} />
      
        <div className='notion-nav-header-rhs breadcrumbs'>
         
          {navigationLinks
            ?.map((link, index) => {
              if (!link.pageId && !link.url) {
                return null
              }

              if (link.pageId) {
                return (

                  <components.PageLink
                    href={mapPageUrl(link.pageId)}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.PageLink>
                )
              } else {
                return (
                  <components.Link
                    href={link.url}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.Link>
                )
              }
            })
            .filter(Boolean)}
     
          <div className='drop'>
          {open ? <li onClick={handleChange} className="drop-button">Service</li>:<li onClick={handleChange} className="drop-btton-off"><text>Service</text></li>}
            
          {
            open?( 
            <div className='drop-list '>
              {navigationLinksBlock?.map((link,index)=>{
                if (!link.pageId && !link.url) {
                  return null
                }
                // alert(JSON.stringify(link))
                if(link.pageId){
                return(

                  <nav key={index}  className="navlist"> 
                  <components.PageLink
                    href={mapPageUrl(link.pageId)}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                    // className='list'
                  >   
                    {link.title}    
                   
                  </components.PageLink>
                    </nav>
                )
              } else {
                  return (
                    <components.Link
                      href={link.url}
                      key={index}
                      className={cs(styles.navLink, 'breadcrumb', 'button')}
                    >
                      {link.title}
                    </components.Link>
                  )
                }
              }).filter(Boolean)}
              </div>
            ):null
          }
          </div>
      
       
          <ToggleThemeButton />

          {isSearchEnabled && <Search block={block} title={null} />}
        </div>
             
        {/* <div className='notion-nav-header-rhs breadcrumbs'>
          {navigationLinks
            ?.map((link, index) => {
              if (!link.pageId && !link.url) {
                return null
              }

              if (link.pageId) {
                return (
                  <components.PageLink
                    href={mapPageUrl(link.pageId)}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.PageLink>
                )
              } else {
                return (
                  <components.Link
                    href={link.url}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.Link>
                )
              }
            })
            .filter(Boolean)}

          <ToggleThemeButton />

          {isSearchEnabled && <Search block={block} title={null} />}
        </div> */}
      </div>
    </header>
  )
}
