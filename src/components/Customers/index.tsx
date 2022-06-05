import React, { useEffect, useState } from 'react';
import clientsImages from '../../data/clients';

import { Container, LogoSection, Logos } from './styles';

interface ClientTypes {
  imageSrc: string;
  imageAlt: string;
}

const Customers: React.FC = () => {
  const [clients, setClients] = useState<ClientTypes[]>([]);

  useEffect(() => {
    async function fetchClients() {
      const responseClient = await clientsImages;

      setClients(responseClient);
    }

    fetchClients();
  }, [])

  return (
    <Container>
      <LogoSection>
        <Logos>
          {clients.map(client => (
            <img key={client.imageAlt} src={client.imageSrc} alt={client.imageAlt} />
          ))}
        </Logos>
      </LogoSection>
    </Container>
  );
}

export default Customers;