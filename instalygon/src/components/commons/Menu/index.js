import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper'
import { Logo } from './theme/Logo'

export default function Menu () {
  return (
    <MenuWrapper>
        <MenuWrapper.LeftSide>
           <Logo/>
        </MenuWrapper.LeftSide>
        <MenuWrapper.CentralSide as="ul">
            {[
            { url: '/', name: 'Home' },
            { url: '/faq', name: 'Perguntas Frequentes' },
            { url: '/sobre', name: 'Sobre' },
            ].map((link) => (
            <li key={link.url}>
                <a href={link.url}>
                {link.name}
                </a>
            </li>
            ))}
        </MenuWrapper.CentralSide>
        <MenuWrapper.RightSide>
            <button>
                Entrar
            </button>
            <button>
                Cadastrar
            </button>
        </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}