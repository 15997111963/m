import React from 'react'
import Layout from '@/components/layout'

import { withTranslation } from '@/i18n'
import "./style.less"
import { useAmp } from "next/amp"

import Img from "./img"

const Index = ({ t }) => {
  const changeLanguage = () => {
    console.log('change')
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
  }
  return (
    <div className="home">
      <Layout>
        <div>{useAmp() ? "is Amp" : "no Amp"}</div>
        <Img />
        <button on="tap:sidebar.toggle" className="sidebar-trigger">
          ☰
        </button>
        <button onClick={changeLanguage}>切换语言</button>
        <footer>{t('aaa')}</footer>
      </Layout>
    </div>
  )
}

Index.getInitialProps = async () => {
  return { namespacesRequired: ['footer'] }
}

export default withTranslation('footer')(Index)