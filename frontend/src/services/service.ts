import { ActivitiesDetailResponse, Activity } from "../types/registration";

const apiUrl = process.env.VITE_BACKEND_URL || "http://localhost:8000";

export const obtenerActividades = async (): Promise<Activity[]> => {
  const response = await fetch(`${apiUrl}/actividades`).then((res) =>
    res.json()
  );
  return response.actividades;
};

export const obtenerDetalleActividad = async (
  id: string
): Promise<ActivitiesDetailResponse> => {
  const response = await fetch(`${apiUrl}/actividad/${id}`).then((res) =>
    res.json()
  );

  return response;
};

export const inscribirActividad = async (body: any) => {
  const response = await fetch(`${apiUrl}/api/inscripcion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || "Error en la inscripción");
  }

  return response.json();
};
