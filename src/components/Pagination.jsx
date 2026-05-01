import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex flex-col gap-2 py-8">
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => setPage(page - 1)}
          className="px-6 py-2 bg-slate-800 text-white text-sm font-light rounded-lg disabled:bg-slate-200 disabled:text-slate-400 transition-colors hover:bg-slate-700"
          disabled={page <= 1}
        >
          Önceki
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="px-6 py-2 bg-slate-800 text-white text-sm font-light rounded-lg disabled:bg-slate-200 disabled:text-slate-400 transition-colors hover:bg-slate-700"
          disabled={page >= totalPages}
        >
          Sonraki
        </button>
      </div>
      <p className="text-center font-light text-sm text-slate-400">
        Sayfa {page}
      </p>
    </div>
  );
};

export default Pagination;
