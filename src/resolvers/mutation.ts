import { IResolvers } from "graphql-tools";
import _ from "lodash";
import { database } from "../data/data.store";

const mutation: IResolvers = {
  Mutation: {
    cursoNuevo(__: void, { curso }): any {
      const itemCurso = {
        id: String(database.cursos.length + 1),
        title: curso.title,
        description: curso.description,
        clases: curso.clases,
        time: curso.time,
        level: curso.level,
        logo: curso.logo,
        path: curso.path,
        teacher: curso.teacher,
        reviews: [],
      };
      if (
        database.cursos.filter((item) => item.title === itemCurso.title)
          .length === 0
      ) {
        database.cursos.push(itemCurso);
        return itemCurso;
      }

      return {
        id: "-1",
        title: "Este curso ya existe",
        description: "",
        clases: 0,
        time: 0,
        level: "ALL",
        logo: "",
        path: "",
        teacher: "",
        reviews: [],
      };
    },
    modificarCurso(__: void, { curso }: any) {
      const selectedCourse = _.findIndex(database.cursos, function (o) {
        return o.id === curso.id;
      });
      if (selectedCourse >= 0) {
        const valoraciones = database.cursos[selectedCourse].reviews;
        curso.reviews = valoraciones;
        database.cursos[selectedCourse] = curso;
        return curso;
      }
      return {
        id: "-1",
        title: "Curso no encontrado",
        description: "",
        clases: 0,
        time: 0,
        level: "ALL",
        logo: "",
        path: "",
        teacher: "",
        reviews: [],
      };
    },
    eliminarCurso(__: void, { id }: any) {
      const selectedCourse = _.remove(database.cursos, function (curso) {
        return curso.id === id;
      });
      if (selectedCourse[0] === undefined) {
        return {
          id: "-1",
          title: "Curso no encontrado, imposible borrar.",
          description: "",
          clases: 0,
          time: 0,
          level: "ALL",
          logo: "",
          path: "",
          teacher: "",
          reviews: [],
        };
      }
      return selectedCourse[0];
    },
  },
};

export default mutation;
