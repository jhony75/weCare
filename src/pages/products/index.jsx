import { Link } from 'gatsby';
import React from 'react';
import BaseLayout from '../../components/BaseLayout';
import Card from '../../components/Card';
import * as styles from '../../styles/productsPage.module.scss';

function Products() {
  return (
    <BaseLayout>
      <h1>Nossos produtos</h1>
      <div className={styles.ProductsPage}>
        <Card
          img="https://brazilsouth1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Ffiapcom-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!N1nMEC7kw0ulBGmWn08CwcEE1kIsEKRAiyIRdKYlxM0P5c7sMVTMRos_i3l-IdHV%2Fitems%2F01TJ5CFRM5GKUJ44VMC5A2ETGQJYG24U3D%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZmlhcGNvbS1teS5zaGFyZXBvaW50LmNvbUAxMWRiYmZlMi04OWI4LTQ1NDktYmUxMC1jZWMzNjRlNTk1NTEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjM0OTQ3MjAwIiwiZXhwIjoiMTYzNDk2ODgwMCIsImVuZHBvaW50dXJsIjoiaFRkMDZVR0kwWWtDR2lCYllvb0VST3VSRWtxbFV4ZkdGK0J4NDF1QWF0az0iLCJlbmRwb2ludHVybExlbmd0aCI6IjExNyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik1UQmpZelU1TXpjdFpUUXlaUzAwWW1NekxXRTFNRFF0TmprNU5qbG1OR1l3TW1NeCIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHxybTg2MjcyQGZpYXAuY29tLmJyIiwibmlpIjoibWljcm9zb2Z0LnNoYXJlcG9pbnQiLCJpc3VzZXIiOiJ0cnVlIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA5YTQyOTM2YkBsaXZlLmNvbSIsInNlc3Npb25pZCI6IjljZjM0Y2ZjLTM2NzktNDYyYi05NmVjLTI4ZTdjOTE1ZDUyZSIsInR0IjoiMCIsInVzZVBlcnNpc3RlbnRDb29raWUiOiIyIiwiaXBhZGRyIjoiMTkxLjkuMjQuMTgifQ.YnJFSzU4aUpQL3lFY2dPUXhqa1E5MnIwMjFSa3BYemJpM283VkdWN3h4ND0&cTag=%22c%3A%7B9EA8329D-AC72-4117-A24C-D04E0DAE5363%7D%2C1%22&encodeFailures=1&width=225&height=174&srcWidth=3300&srcHeight=2550"
          alt="Modelo 3D Patch"
          title="CardioPatch"
          text="Patch para monitoramento cardíaco."
          link="./cardioPatch"
        />
        <Card
          img="https://brazilsouth1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Ffiapcom-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!N1nMEC7kw0ulBGmWn08CwcEE1kIsEKRAiyIRdKYlxM0P5c7sMVTMRos_i3l-IdHV%2Fitems%2F01TJ5CFRNQZK7LOPKVZVFIDONZXS5GUA3M%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZmlhcGNvbS1teS5zaGFyZXBvaW50LmNvbUAxMWRiYmZlMi04OWI4LTQ1NDktYmUxMC1jZWMzNjRlNTk1NTEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjM0OTQ3MjAwIiwiZXhwIjoiMTYzNDk2ODgwMCIsImVuZHBvaW50dXJsIjoiaFRkMDZVR0kwWWtDR2lCYllvb0VST3VSRWtxbFV4ZkdGK0J4NDF1QWF0az0iLCJlbmRwb2ludHVybExlbmd0aCI6IjExNyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik1UQmpZelU1TXpjdFpUUXlaUzAwWW1NekxXRTFNRFF0TmprNU5qbG1OR1l3TW1NeCIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHxybTg2MjcyQGZpYXAuY29tLmJyIiwibmlpIjoibWljcm9zb2Z0LnNoYXJlcG9pbnQiLCJpc3VzZXIiOiJ0cnVlIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA5YTQyOTM2YkBsaXZlLmNvbSIsInNlc3Npb25pZCI6IjljZjM0Y2ZjLTM2NzktNDYyYi05NmVjLTI4ZTdjOTE1ZDUyZSIsInR0IjoiMCIsInVzZVBlcnNpc3RlbnRDb29raWUiOiIyIiwiaXBhZGRyIjoiMTkxLjkuMjQuMTgifQ.YnJFSzU4aUpQL3lFY2dPUXhqa1E5MnIwMjFSa3BYemJpM283VkdWN3h4ND0&cTag=%22c%3A%7BB7BECAB0-553D-4ACD-81B9-B9BCBA6A036C%7D%2C1%22&encodeFailures=1&width=900&height=913&srcWidth=&srcHeight="
          alt="Modelo 3D totem"
          title="Totem de Triagem"
          text="Totem para automatização do processo de triagem hospitalar."
          link="./totem"
        />
      </div>
    </BaseLayout>
  );
}

export default Products;
