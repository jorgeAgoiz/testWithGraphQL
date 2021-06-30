import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return database.estudiantes;
    },
    estudiante(_: void, { id }): any {
      const result =
        database.estudiantes.filter((estudiante) => estudiante.id === id)[0];
      if (!result) {
        return {
          id: "-1",
          name: `No se ha encontrado el estudiante con el ID ${id}`,
          email: "",
          courses: [],
        };
      }
      return result;
    },
    cursos(): any {
      return database.cursos;
    },
    curso(_: void, { id }): any {
      const result = database.cursos.filter((curso) => curso.id === id)[0];
      if (!result) {
        return {
          id: "-1",
          title: `No se ha encontrado el curso con el ID ${id}`,
          description: "",
          clases: 0,
          time: 0.1,
          logo: "",
          level: "ALL",
          path: "",
          teacher: "",
          students: [],
          reviews: [],
        };
      }
      return result;
    },
  },
};

export default query;
