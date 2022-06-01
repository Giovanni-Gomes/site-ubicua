import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Card, Container, Content, Under } from './styles';

interface IHeaderProps {
  id:string;
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
  const [title, setTitle] = useState<IHeaderProps[]>([]);
  const [link, setLink] = useState<IHeaderProps[]>([]);
  const [app, setApp] = useState<IHeaderProps[]>([]);
  const [midia, setMidia] = useState<IHeaderProps[]>([]);

  useEffect(() => {
    async function fetchFooter() {
      const responseTitle = await api.get('v1/footer/titles');
      const responseLink = await api.get('v1/footer/links');
      const responseApp = await api.get('v1/footer/apps');
      const responseMidia = await api.get('v1/footer/midias');

      setTitle(responseTitle.data);
      setLink(responseLink.data);
      setApp(responseApp.data);
      setMidia(responseMidia.data);
    }

    fetchFooter();
  },[])

  return (
    <Container>
      <Content>
        {title.map(ti => (
          <Card key={ti.id} className="card-footer">
            <h3>{ti.name}</h3>
            <ul className="list">
              {link.map(lk => (
                <li className="item">
                  {lk.footer_titles_id == ti.id ? lk.name : null}
                </li>
              ))}
            </ul>
          </Card>
        ))}
          <Card>
            <h3>Install App</h3>
            <ul>
              {app.map(ap => (
                <li className="item">
                  {ap.name}
                </li>
              ))}
            </ul>
          </Card>
      </Content>
      <Under>
        {midia.map(md => (<>
          <a href={md.link}>{md.copyright}</a>
          <div id="wrapperImage">
            <img src={md.midia_social_one} alt="Instagram" />
            <img src={md.midia_social_two} alt="Icon" />
            <img src={md.midia_social_tree} alt="Twitter" />
            <img src={md.midia_social_for} alt="Youtube" />
          </div> </>
        ))}
      </Under>
    </Container>
  );
}

export default Footer;