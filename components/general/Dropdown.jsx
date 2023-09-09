import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment } from 'react'
import LinkComponent from './nav/LinkComponent'

const Dropdown = ({items, button, as, className, buttonClassName, itemsClassName, activeClassName, unActiveClassName}) => {
  return (
    <Menu as={as || "a"} className={`relative ${className}`}>
      <Menu.Button className={buttonClassName}>{button}</Menu.Button>
      <Menu.Items className={`absolute top-[calc(100%+0.5rem)] rounded-md p-3 z-10 backdrop-blur-[10px] ${itemsClassName}`}>
          <Transition
              enter="ease-out duration-150"
              enterFrom="opacity-0 -translate-y-[50px]"
              enterTo="opacity-100 translate-y-0"
              leave="ease-out duration-75"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-[50px]"
              as="ul"
              className="flex flex-col gap-3"
          >
        {items && Array.isArray(items) && items.map((/* {path, action, label} */data, index) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={index} as={"li"}>
            {({ active }) => (

                    <LinkComponent footer showIcon {...data} active={active} activeClassName={activeClassName} unActiveClassName={unActiveClassName} />

                    // action? <a
                    //     className={`${
                    //     active ? activeClassName || 'text-white' : unActiveClassName || 'text-slate-300'
                    //     }`}
                    // >
                    //     {label}
                    // </a>: <Link href={path || ""}>{label}</Link>
                    )}
          </Menu.Item>
        ))}
        </Transition>
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown
