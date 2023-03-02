import { db } from '../db.js';

export const regiao = (_, res) =>{
  const regiao = "SELECT region AS Regiao, COUNT(region) AS Quantidade FROM casas GROUP BY region;";

  db.query(regiao, (err, data) =>{
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const aparicoes = (_, res) =>{
  const aparicoes = "SELECT Characters as personagens, episodes_appeared/(last_appearance - first_appearance) as media_aparicoes_por_ano FROM personagens WHERE last_appearance - first_appearance <> 0 LIMIT 10;";

  db.query(aparicoes, (err, data) =>{
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
};