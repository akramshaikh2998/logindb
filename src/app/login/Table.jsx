export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center"></div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Material
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Density kg/dm^3
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <select>
                        <option></option>
                        <option>Acrylic glass</option>
                        <option>Aluminium</option>
                        <option>Balsa wood</option>
                        <option>Concrete</option>
                        <option>Lead</option>
                        <option>Iron</option>
                        <option>Plasterboard</option>
                        <option>Glass</option>
                        <option>Hard fiber</option>
                        <option>Hardwood, wet</option>
                        <option>Hardwood, dry (Beech)</option>
                        <option>Cork</option>
                        <option>Plastic (PE)</option>
                        <option>Marble</option>
                        <option>MDF</option>
                        <option>Corian</option>
                        <option>Mineral wool</option>
                        <option>Paper</option>
                        <option>Pock wood</option>
                        <option>Chipboard</option>
                        <option>Coreboard</option>
                        <option>Plywood</option>
                        <option>Water</option>
                        <option>Softwood, wet</option>
                        <option>Softwood, dry (Spruce)</option>
                      </select>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <label></label>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Input
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      Number
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <input
                        className="font-bold border border-black inline-block "
                        type="text"
                      ></input>
                    </td>
                  </tr>
                }
                {
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      Length
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <input
                        className="font-bold border border-black inline-block "
                        type="text"
                      ></input>
                    </td>
                  </tr>
                }
                {
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      Width
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <input
                        className="font-bold border border-black inline-block "
                        type="text"
                      ></input>
                    </td>
                  </tr>
                }
                {
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      Thickness
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <input
                        className="font-bold border border-black inline-block "
                        type="text"
                      ></input>
                    </td>
                  </tr>
                }

                {
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold text-gray-900 sm:pl-0">
                      Weigth:
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <input
                        className="font-bold border border-black inline-block h-12 "
                        type="text"
                      ></input>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
