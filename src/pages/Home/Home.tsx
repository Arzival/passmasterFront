import React from 'react';

const Home = () => {
  return (
    <main className="flex-1">
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Genera y almacena contraseñas de manera segura
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Nuestra plataforma te ofrece una solución confiable para crear y guardar tus contraseñas. Mantén tus cuentas protegidas con nuestro avanzado sistema de seguridad.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="btn btn-primary">Regístrate</button>
             
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span>aqui va la imagen</span>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
};

export default Home;
