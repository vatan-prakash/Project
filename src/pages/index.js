import Card from "@/components/Card";
import SwitchButton from "@/components/Switch";
import { useEffect, useState } from "react";

export default function Home() {

  const data = [
    {
      title: "Pro",
      para: "For newbies and small teams:",
      price: { val: "129", dec: "95" },
      para2: "SEO, PPC, and research tools:",
      lastPara: "Competitor analysis, keyword research, website audit, backlink analysis, advertising tools, and more",
      list: ["5 projects", "500 keywords to track", "10,000 results per report"]
    },
    {
      title: "Guru",
      para: "For agencies and mid-size businesses:",
      price: { val: "208", dec: "33" },
      para2: "All Pro features plus:",
      lastPara: "Content Marketing Toolkit, historical data, multi-location and device tracking, Looker Studio integration, and more",
      list: ["15 projects", "1500 keywords to track", "30,000 results per report"]
    },
    {
      title: "Business",
      para: "For large agencies and enterprises:",
      para2: "All Guru features plus:",
      price: { val: "416", dec: "66" },
      lastPara: "Share of Voice, extended limits, API access, PLA analytics, free migration from third-party tools, and more",
      list: ["40 projects", "5000 keywords to track", "50,000 results per report"]
    }
  ]

  return (
    <div className="section">
      <div className="container">
        <div className="d-flex sp-between aic main">
          <h1 className="title">Plans &amp; Pricing</h1>
          <div className="d-flex aic">
            <SwitchButton />
            <p style={{ margin: '0', marginLeft: '1rem', color:'#575c66' }}>Pay annually and <strong className="save">save up to 17%</strong></p>
          </div>
        </div>
        <div className="list d-flex">
          {data?.map((item, i) => {
            return (
              <Card key={i} data={item} />
            )
          })}
        </div>
        <div className="section2">
          <div>
            <h2 className="title2">Compare Plans</h2>
            <div className="d-flex aic">
              <SwitchButton />
              <p style={{ margin: '0', marginLeft: '1rem', color:'#575c66' }}>Pay annually</p>
            </div>
          </div>
          {data?.map((item, i) => {
            return (
              <div className="contain" key={i}>
                <div className="top1">{item?.title}</div>
                <div className="price">
                  <span style={{ fontSize: '26px', lineHeight: '1.2', fontWeight: '700' }}>${item?.price.val}</span>.{item?.price.dec} /mo
                </div>
                <div className="btn_container1">
                  <div className="btn1 d-flex jsc aic">Subscribe</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}
