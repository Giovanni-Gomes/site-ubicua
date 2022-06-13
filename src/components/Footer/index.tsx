import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Card, Container, Content, Under } from './styles';

interface IFooterProps {
  id: string;
  name: string;
  link: string;
  footer_titles_id: string;
  copyright: string;
  midia_social_one: string;
  midia_social_two: string;
  midia_social_tree: string;
  midia_social_for: string;
}

const Footer: React.FC = () => {
  const [title, setTitle] = useState<IFooterProps[]>([]);
  const [link, setLink] = useState<IFooterProps[]>([]);
  // const [app, setApp] = useState<IFooterProps[]>([]);
  const [midia, setMidia] = useState<IFooterProps[]>([]);

  useEffect(() => {
    async function fetchFooter() {
      const responseTitle = await api.get('v1/footer/titles');
      const responseLink = await api.get('v1/footer/links');
      // const responseApp = await api.get('v1/footer/apps');
      const responseMidia = await api.get('v1/footer/midias');

      setTitle(responseTitle.data);
      setLink(responseLink.data);
      // setApp(responseApp.data);
      setMidia(responseMidia.data);
    }

    fetchFooter();
  }, [])

  return (
    <Container>
      <Content>
        {title.map((ti, key) => (
          <Card key={key} className="card-footer">
            <h3>{ti.name}</h3>
            <ul className="list">
              {link.map((lk, idx) => (
                <li key={idx} className="item">
                  <a href={lk.link}>{lk.footer_titles_id == ti.id ? lk.name : null}</a>
                </li>
              ))}
            </ul>
          </Card>
        ))}
        <Card>
          <h3>Install App</h3>
          <ul>
            {/* {app.map(ap => (
              <li className="item">
                {ap.name}
              </li>
            ))} */}
            <li><img src="/assets/app/appStore.svg" alt="" /></li>
            <li><img src="/assets/app/googlePlay.svg" alt="" /></li>
          </ul>
        </Card>
      </Content>
        {midia.map((md, key) => (
          <Under key={key}>
            <a href={md.link}>{md.copyright}</a>
            <div id="wrapperImage">
              <a href="#">
                <img src={md.midia_social_one} alt="Instagram" />
              </a>
              <a href="#">
                <img src={md.midia_social_two} alt="Icon" />
              </a>
              <a href="#">
                <img src={md.midia_social_tree} alt="Twitter" />
              </a>
              <a href="#">
                <img src={md.midia_social_for} alt="Youtube" />
              </a>
            </div>
          </Under>
        ))}
    </Container>
  );
}

export default Footer;