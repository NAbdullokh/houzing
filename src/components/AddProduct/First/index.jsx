import React, { useState } from "react";
import { Container, InputWrapper, Wrapper } from "./style";
import { Input } from "../../Generic/Input";
import { Button } from "../../Generic/Button";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMutation, useQuery } from "react-query";
import { useHttp } from "../../../hooks/useHttps";

const First = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const { request } = useHttp();
  const [map, setMap] = React.useState(null);

  useQuery(
    "getSinglesssds Items",
    () => {
      return id && request({ url: `/v1/houses/${id}`, token: true });
    },
    {
      onSuccess: (res) => {
        setData(res?.data);
        console.log(res, "res");
      },
    }
  );

  // google map
  const [center, setCenter] = useState({
    lat: 41.2995,
    lng: 69.2401,
  });
  const containerStyle = {
    width: "100%",
    height: "600px",
  };
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const { isLoaded } = useJsApiLoader({
    id: "edit-house",
    // googleMapsApiKey: key,
  });
  const onMapClick = (e) => {
    console.log(e?.latLang?.lat(), "lat");
    console.log(e?.latLang?.lng(), "lng");
    setCenter({
      lat: e?.latLang?.lat(),
      lng: e?.latLang?.lng(),
    });
  };
  // google map

  const { mutate } = useMutation((value) =>
    request({
      url: "/v1/houses",
      method: "POST",
      token: true,
      body: {
        ...value,
        attachments: [
          {
            imgPath:
              "https://pix10.agoda.net/hotelImages/7950132/-1/b31289e578b8a105950b2d4e7b170ffc.jpg",
          },
        ],
        city: "string",
        componentsDto: {
          additional: "zor",
          airCondition: true,
          courtyard: true,
          furniture: true,
          gasStove: true,
          internet: true,
          tv: true,
        },
        homeAmenitiesDto: {
          additional: "zor",
          busStop: true,
          garden: true,
          market: true,
          park: true,
          parking: true,
          school: true,
          stadium: true,
          subway: true,
          superMarket: true,
        },
        locations: {
          latitude: 41.2995,
          longitude: 69.2401,
        },
        name: "string",
        region: "string",
        status: true,
        zipCode: "string",
      },
    })
  );

  const { mutate: update } = useMutation(
    ({ id, value }) =>
      id &&
      request({
        url: `/v1/houses/${id}`,
        method: "PUT",
        token: true,
        body: value,
      })
  );

  const onSave = (value) => {
    if (id) {
      update(
        { id, value },
        {
          onSuccess: (res) => {
            if (res?.success) {
              navigate("/profile");
            }
          },
        }
      );
    } else {
      mutate(value, {
        onSuccess: (res) => {
          console.log(res?.success, "success");
          if (res?.success) {
            navigate("/profile");
          }
        },
      });
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { data },

    onSubmit: (item) => {
      console.log(item, "item");
    },
  });
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     type: "",
  //     description: "",
  //     categoryId: "",
  //     property: "",
  //     status: true,
  //     label: "",
  //     material: "",
  //     address: "",
  //     region: "",
  //     // rooms: 0,
  //     // beds: 0,
  //     // bath: 0,
  //     // garage: 0,
  //     // yearBuilt: 0,
  //     // sqft: 0,
  //     // dimensions: 0,
  //     // area: 0,
  //     // price: 0,
  //     // prefixPrice: 0,
  //     // suffixPrice: 0,
  //     // customPrice: 0,
  //     // latidude: 0,
  //     // logtitude: 0,
  //   },
  // });

  // const navigate = useNavigate();

  // const getSave = async () => {
  //   fetch("https://houzing-app.herokuapp.com/api/v1/houses", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify({
  //       name: formik.values.name,
  //       // type: formik.values.type,
  //       description: formik.values.description,
  //       categoryId: formik.values.categoryId,
  //       // property: formik.values.property,
  //       status: formik.values.status,
  //       // label: formik.values.label,
  //       // material: formik.values.material,
  //       address: formik.values.address,
  //       region: formik.values.region,
  //       room: Number(formik.values.room),
  //       beds: Number(formik.values.beds),
  //       bath: Number(formik.values.bath),
  //       garage: Number(formik.values.garage),
  //       yearBuilt: Number(formik.values.yearBuilt),
  //       // Number(sqft: formik.values.sqft,)
  //       area: Number(formik.values.area),
  //       price: Number(formik.values.price),
  //       latidude: formik.values.latidude,
  //       logtitude: formik.values.logtitude,
  //     }),
  //   }).then((res) => res.json());
  // };
  // // navigate("/home");
  // console.log(formik);
  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Container>
        <p className="title">Contact information</p>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Property title*"
            value={formik.values.data?.address || ""}
            onChange={formik.handleChange}
            name="name"
          />
          <Input
            type="text"
            placeholder="Type"
            onChange={formik.handleChange}
            value={formik.values.data?.category?.name || ""}
            name="type"
          />
        </InputWrapper>
        <Input
          type="text"
          placeholder="Property Description*"
          mt="40"
          value={formik.values.data?.description || ""}
          onChange={formik.handleChange}
          name="description"
        />
      </Container>
      {/*  */}
      <Container>
        <p className="title">Additional</p>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Property ID"
            value={formik.values.categoryId}
            onChange={formik.handleChange}
            name="categoryId"
          />
          <Input
            type="text"
            placeholder="Parent property"
            value={formik.values.property}
            onChange={formik.handleChange}
            name="property"
          />
          <Input
            type="text"
            placeholder="Status"
            value={formik.values.status}
            onChange={formik.handleChange}
            name="status"
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            placeholder="Label"
            value={formik.values.label}
            onChange={formik.handleChange}
            name="label"
          />
          <Input
            type="text"
            placeholder="Material"
            value={formik.values.material}
            onChange={formik.handleChange}
            name="material"
          />
          <Input
            type="text"
            placeholder="Rooms"
            onChange={formik.handleChange}
            value={formik.values.data?.houseDetails?.room || ""}
            name="room"
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            placeholder="Beds"
            onChange={formik.handleChange}
            value={formik.values.data?.houseDetails?.beds || ""}
            name="beds"
          />
          <Input
            type="text"
            placeholder="Baths"
            value={formik.values.data?.houseDetails?.bath || ""}
            onChange={formik.handleChange}
            name="bath"
          />
          <Input
            type="text"
            placeholder="Garages"
            onChange={formik.handleChange}
            value={formik.values.data?.houseDetails?.garage || ""}
            name="garage"
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            placeholder="Year bulid"
            onChange={formik.handleChange}
            name="yearBuilt"
            value={formik.values.data?.houseDetails?.yearBuilt || ""}
          />
          <Input
            type="text"
            placeholder="Home area (sqft)"
            onChange={formik.handleChange}
            value={formik.values.data?.houseDetails?.area || ""}
            name="sqft"
          />
          <Input
            type="text"
            placeholder="Lot dimensions"
            value={formik.values.dimensions}
            onChange={formik.handleChange}
            name="dimensions"
          />
        </InputWrapper>
        <Input
          type="text"
          placeholder="Lot area (sqft)"
          value={formik.values.area}
          onChange={formik.handleChange}
          name="area"
        />
      </Container>
      {/*  */}
      <Container>
        <p className="title">Price</p>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Price ($)"
            value={formik.values.data?.price || ""}
            onChange={formik.handleChange}
            name="price"
          />
          <Input
            type="text"
            placeholder="Price Prefix"
            onChange={formik.handleChange}
            value={formik.values.data?.salePrice || ""}
            name="prefixPrice"
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            placeholder="Price Suffix"
            value={formik.values.suffixPrice}
            onChange={formik.handleChange}
            name="suffixPrice"
          />
          <Input
            type="text"
            placeholder="Price Custom"
            value={formik.values.customPrice}
            onChange={formik.handleChange}
            name="customPrice"
          />
        </InputWrapper>
      </Container>
      {/*  */}
      <Container>
        <p className="title">Location</p>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Regions"
            onChange={formik.handleChange}
            value={formik.values.data?.latitude || ""}
            name="region"
          />
          <Input
            type="text"
            placeholder="Address"
            onChange={formik.handleChange}
            value={formik.values.data?.longitude || ""}
            name="address"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Latidude"
            value={formik.values.latidude}
            onChange={formik.handleChange}
            name="latidude"
          />
          <Input
            type="text"
            placeholder="Logtitude"
            value={formik.values.logtitude}
            onChange={formik.handleChange}
            name="logtitude"
          />
        </InputWrapper>
      </Container>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={() => onMapClick()}
        >
          <>
            <Marker position={center} />
            <Marker position={center} />
          </>
        </GoogleMap>
      )}
      <Button
        onClick={() => onSave(formik.values.data)}
        type="primary"
        width="280px"
        ml="auto"
        mb="30"
        mt="50"
      >
        Submit
      </Button>
    </Wrapper>
  );
};

export default First;
