import "./App.css";

function Info({ data }) {
  const copy = (e, data) => {
    // if (data != null){
    //     navigator.clipboard.writeText(data)
    //     const v = document.getElementById(data)
    //     console.log(v)
    // }
    console.log(e);
    console.log(e.target);
    e.target.classList.remove("text-white");
    e.target.classList.add("text-green-500");

    navigator.clipboard.writeText(data);
  };

  const Input = ({ placeholder }) => (
    <p
      className="my-2 w-full rounded-sm p-2 mr-3 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
      onClick={(e) => copy(e, placeholder)}
    >
      {placeholder}
    </p>
  );

  return (
    <div className="text-gray-500">
      <p className="text-gray-500 mb-10">
        *Green text means the field was copied to clipboard*
      </p>
      <div>
        <h1>Personal Info</h1>
      </div>
      <div className="p-5 flex flex-row blue-glassmorphism">
        <div className="w-1/3 mr-4">
          <p>Account Number</p>
          <Input placeholder={data.record_key_account_number_sdat_field_3} />

          <p>Owner Name(s)</p>
          <Input placeholder={data.name} />

          <p>Mailing Address</p>
          <Input placeholder={data.mailing_add} />
        </div>

        <div className="w-1/3 mr-4">
          <p>Premises Address</p>
          <Input
            placeholder={
              data.mdp_street_address_mdp_field_address +
              ", " +
              data.premise_address_city_mdp_field_premcity_sdat_field_25
            }
          />

          <p>District</p>
          <Input placeholder={data.record_key_district_ward_sdat_field_2} />

          <p>Deed Reference</p>
          <Input
            placeholder={
              "/" +
              data.deed_reference_1_liber_mdp_field_dr1liber_sdat_field_30 +
              "/ " +
              data.deed_reference_1_folio_mdp_field_dr1folio_sdat_field_31
            }
          />
        </div>
        <div className="w-1/3">
          <p>Use</p>
          <Input
            placeholder={data.land_use_code_mdp_field_lu_desclu_sdat_field_50}
          />

          <p>Principal Residence</p>
          <Input placeholder={data.principal_res} />

          <p>Legal Description</p>
          <Input placeholder={null} />
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-400 my-2" />

      <div>
        <h1>Geographic Info</h1>
      </div>
      <div className="p-5 flex flex-row blue-glassmorphism overflow-scroll lg:overflow-hidden">
        <div className="w-1/5 mr-4">
          <p>Map</p>
          <Input placeholder={data.map_mdp_field_map_sdat_field_42} />

          <p>Grid</p>
          <Input placeholder={data.grid_mdp_field_grid_sdat_field_43} />

          <p>Parcel</p>
          <Input placeholder={data.parcel_mdp_field_parcel_sdat_field_44} />
        </div>

        <div className="w-1/5 mr-10 lg:mr-4">
          <p>Neighborhood</p>
          <Input
            placeholder={
              data.c_a_m_a_system_data_set_no_sdat_field_236 +
              data.c_a_m_a_system_data_subset_no_sdat_field_237 +
              "." +
              data.record_key_county_code_sdat_field_1
            }
          />

          <p>Subdivision</p>
          <Input
            placeholder={data.c_a_m_a_system_data_subset_no_sdat_field_237}
          />
        </div>

        <div className="w-1/5 mr-8 lg:mr-4">
          <p>Section</p>
          <Input placeholder={null} />

          <p>Block</p>
          <Input placeholder={data.block_mdp_field_block_sdat_field_40} />
        </div>

        <div className="w-1/5 mr-4">
          <p>Lot</p>
          <Input placeholder={data.lot_mdp_field_lot_sdat_field_41} />

          <p>Assessment Year</p>
          <Input placeholder={data.assessment_cycle_year_sdat_field_399} />
        </div>

        <div className="w-1/5 mr-4">
          <p>Plat Number</p>
          <Input placeholder={data.plat_number_mdp_field_plat_sdat_field_38} />

          <p>Plat Reference</p>
          <Input
            placeholder={
              data.plat_reference_liber_mdp_field_pltliber_sdat_field_267
            }
          />
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-400 my-2" />

      <div>
        <h1>Town Info</h1>
      </div>
      <div className="p-5 flex flex-row blue-glassmorphism overflow-scroll lg:overflow-hidden">
        <div className="w-1/2 mr-4">
          <p>Town</p>
          <Input
            placeholder={
              data.town_code_mdp_field_towncode_desctown_sdat_field_36
            }
          />
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-400 my-2" />

      <div>
        <h1>Structure Info</h1>
      </div>
      <div className="p-5 flex flex-row blue-glassmorphism overflow-scroll lg:overflow-hidden">
        <div className="w-1/5 mr-4">
          <p>Primary Structure Built</p>
          <Input
            placeholder={
              data.c_a_m_a_system_data_year_built_yyyy_mdp_field_yearblt_sdat_field_235
            }
          />
        </div>

        <div className="w-1/5 mr-4">
          <p>Above Grade Living Area</p>
          <Input
            placeholder={
              data.c_a_m_a_system_data_structure_area_sq_ft_mdp_field_sqftstrc_sdat_field_241
            }
          />
        </div>

        <div className="w-1/5 mr-4">
          <p>Finished Basement Area</p>
          <Input placeholder={null} />
        </div>

        <div className="w-1/5 mr-4">
          <p>Property Land Area</p>
          <Input
            placeholder={
              data.c_a_m_a_system_data_land_area_mdp_field_landarea_sdat_field_242
            }
          />
        </div>

        <div className="w-1/5 mr-4">
          <p>County Usage Code</p>
          <Input placeholder={data.county_system_property_code_sdat_field_56} />
        </div>
      </div>

      <div className="p-5 flex flex-row overflow-scroll lg:overflow-hidden blue-glassmorphism">
        <div className="w-1/8 mr-4">
          <p>Stories</p>
          <Input placeholder={data.stories} />
        </div>

        <div className="w-1/8 mr-4">
          <p>Basement</p>
          <Input placeholder={data.basement} />
        </div>

        <div className="w-1/8 mr-4">
          <p>Type</p>
          <Input
            placeholder={
              data.additional_c_a_m_a_data_dwelling_type_mdp_field_strubldg_sdat_field_265
            }
          />
        </div>

        <div className="w-1/8 mr-4">
          <p> Exterior</p>
          <Input
            placeholder={
              data.additional_c_a_m_a_data_dwelling_construction_code_mdp_field_strucnst_sdat_field_263
            }
          />
        </div>

        <div className="w-1/8 mr-4">
          <p>Quality</p>
          <Input
            placeholder={
              data.c_a_m_a_system_data_dwelling_grade_code_and_description_mdp_field_strugrad_strudesc_sdat_field_230
            }
          />
        </div>

        <div className="w-1/8 mr-4">
          <p>Bathrooms</p>
          <Input placeholder={data.bathroom} />
        </div>

        <div className="w-1/8 mr-4">
          <p>Garage</p>
          <Input placeholder={data.garage} />
        </div>

        <div className="w-1/8 mr-4">
          <p>Last Major Improvements</p>
          <Input placeholder={null} />
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-400 my-2" />

      <div>
        <h1>Value Info</h1>
      </div>
      <div className="p-5 flex blue-glassmorphism overflow-scroll lg:overflow-hidden">
        <div>
          <br></br>
          <br></br>
          <p>Update Dates</p>
          <div className="h-[1px] w-full bg-gray-400 my-2" />
          <p>Land</p>
          <div className="h-[1px] w-full bg-gray-400 my-2" />
          <p>Improvements</p>
          <div className="h-[1px] w-full bg-gray-400 my-2" />
          <p>Total</p>
          <div className="h-[1px] w-full bg-gray-400 my-2" />
          <p>Preferential Land</p>
        </div>

        <div className="w-1/4">
          <p> </p>
        </div>
        <div className="w-1/4 mr-3">
          <p> Base Value </p>
          <Input placeholder="None" />
          <Input placeholder={data.base_cycle_data_land_value_sdat_field_154} />
          <Input
            placeholder={data.base_cycle_data_improvements_value_sdat_field_155}
          />
          <Input
            placeholder={
              data.base_cycle_data_circuit_breaker_value_sdat_field_157
            }
          />
          <Input
            placeholder={
              data.base_cycle_data_preferential_land_value_sdat_field_156
            }
          />
        </div>
        <div className="w-1/4 mr-3">
          <p> Value </p>
          <Input placeholder={data.value_date} />
          <Input
            placeholder={
              data.current_cycle_data_land_value_mdp_field_names_nfmlndvl_curlndvl_and_sallndvl_sdat_field_164
            }
          />
          <Input
            placeholder={
              data.current_cycle_data_improvements_value_mdp_field_names_nfmimpvl_curimpvl_and_salimpvl_sdat_field_165
            }
          />
          <Input
            placeholder={
              data.current_cycle_data_circuit_breaker_value_sdat_field_167
            }
          />
          <Input
            placeholder={
              data.current_cycle_data_preferential_land_value_sdat_field_166
            }
          />
        </div>
        <div className="w-1/4 mr-3">
          <p> Phase-in Assess</p>
          <Input placeholder={data.p1_date} />
          <Input placeholder="NONE" />
          <Input placeholder="NONE" />
          <Input
            placeholder={
              data.prior_assessment_year_circuit_breaker_assessment_sdat_field_163
            }
          />
          <Input placeholder={null} />
        </div>
        <div className="w-1/4">
          <p> Phase-in Assess</p>
          <Input placeholder={data.p2_date} />
          <Input placeholder="NONE" />
          <Input placeholder="NONE" />
          <Input
            placeholder={
              data.current_assessment_year_circuit_breaker_phase_in_value_sdat_field_175
            }
          />
          <Input placeholder={null} />
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-400 my-2" />

      <div>
        <h1>Transfer Info</h1>
      </div>
      <div className="p-5 flex blue-glassmorphism overflow-scroll lg:overflow-hidden">
        <div className="w-1/3 mr-3">
          <p> Seller </p>
          <Input
            placeholder={
              data.sales_segment_1_grantor_name_mdp_field_grntnam1_sdat_field_80
            }
          />

          <p> Type </p>
          <Input
            placeholder={
              data.sales_segment_1_how_conveyed_ind_mdp_field_convey1_sdat_field_87
            }
          />
        </div>

        <div className="w-1/3 mr-3">
          <p> Date </p>
          <Input
            placeholder={
              data.sales_segment_1_transfer_date_yyyy_mm_dd_mdp_field_tradate_sdat_field_89
            }
          />

          <p> Deed1 </p>
          <Input
            placeholder={
              "/" +
              data.deed_reference_1_liber_mdp_field_dr1liber_sdat_field_30 +
              "/ " +
              data.deed_reference_1_folio_mdp_field_dr1folio_sdat_field_31
            }
          />
        </div>

        <div className="w-1/3 mr-3">
          <p> Price </p>
          <Input
            placeholder={
              data.sales_segment_1_consideration_mdp_field_considr1_sdat_field_90
            }
          />

          <p> Deed2 </p>
          <Input placeholder={null} />
        </div>
      </div>
      <div className="p-5 flex blue-glassmorphism">
        <div className="w-1/3 mr-3">
          <p> Seller </p>
          <Input
            placeholder={data.sales_segment_2_grantor_name_sdat_field_100}
          />

          <p> Type </p>
          <Input
            placeholder={data.sales_segment_2_how_conveyed_ind_sdat_field_107}
          />
        </div>

        <div className="w-1/3 mr-3">
          <p> Date </p>
          <Input
            placeholder={
              data.sales_segment_2_transfer_date_yyyy_mm_dd_sdat_field_109
            }
          />

          <p> Deed1 </p>
          <Input
            placeholder={
              "/" +
              data.sales_segment_1_grantor_deed_reference_1_liber_mdp_field_gr1libr1_sdat_field_82 +
              "/ " +
              data.sales_segment_1_grantor_deed_reference_1_folio_mdp_field_gr1folo1_sdat_field_83
            }
          />
        </div>

        <div className="w-1/3 mr-3">
          <p> Price </p>
          <Input
            placeholder={data.sales_segment_2_consideration_sdat_field_110}
          />

          <p> Deed2 </p>
          <Input placeholder={null} />
        </div>
      </div>
      <div className="p-5 flex blue-glassmorphism">
        <div className="w-1/3 mr-3">
          <p> Seller </p>
          <Input
            placeholder={data.sales_segment_3_grantor_name_sdat_field_120}
          />

          <p> Type </p>
          <Input
            placeholder={data.sales_segment_3_how_conveyed_ind_sdat_field_127}
          />
        </div>

        <div className="w-1/3 mr-3">
          <p> Date </p>
          <Input
            placeholder={
              data.sales_segment_3_transfer_date_yyyy_mm_dd_sdat_field_129
            }
          />

          <p> Deed1 </p>
          <Input
            placeholder={
              "/" +
              data.sales_segment_3_grantor_deed_reference_1_liber_sdat_field_122 +
              "/ " +
              data.sales_segment_3_grantor_deed_reference_1_folio_sdat_field_123
            }
          />
        </div>

        <div className="w-1/3 mr-3">
          <p> Price </p>
          <Input
            placeholder={data.sales_segment_3_consideration_sdat_field_130}
          />

          <p> Deed2 </p>
          <Input placeholder={null} />
        </div>
      </div>
    </div>
  );
}
export default Info;
