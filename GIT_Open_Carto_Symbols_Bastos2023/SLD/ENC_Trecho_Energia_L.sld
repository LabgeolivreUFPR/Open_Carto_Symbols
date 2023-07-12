<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0"
    xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"
    xmlns="http://www.opengis.net/sld"
    xmlns:ogc="http://www.opengis.net/ogc"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <Name>ENC_Trecho_Energia_L</Name>
    <UserStyle>
      <Title>ENC_Trecho_Energia_L</Title>
      <FeatureTypeStyle>
        <Rule>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#000000</CssParameter>
              <CssParameter name="stroke-width">0.1</CssParameter>
              <CssParameter name="stroke-dasharray">10 10</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <LineSymbolizer>
            <Stroke>
              <GraphicStroke>
                <Graphic>
                  <Mark>
                    <WellKnownName>circle</WellKnownName>
                    <Fill>
                    <CssParameter name="fill">#000000</CssParameter>
                    </Fill>
                  </Mark>
                  <Size>3.4</Size>
                </Graphic>
              </GraphicStroke>
              <CssParameter name="stroke-dasharray">5 15</CssParameter>     
              <CssParameter name="stroke-dashoffset">5</CssParameter>
            </Stroke>
          </LineSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>