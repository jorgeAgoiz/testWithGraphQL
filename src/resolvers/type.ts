import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
import _ from "lodash";

const type: IResolvers = {
  Estudiante: {
    courses: (parent: any) => {
      const cursosLista: Array<any> = [];
      parent.courses.map((curso: string) => {
        cursosLista.push(_.filter(database.cursos, ["id", curso])[0]);
      });
      console.log(cursosLista);
      return cursosLista;
    },
  },
};

export default type;
